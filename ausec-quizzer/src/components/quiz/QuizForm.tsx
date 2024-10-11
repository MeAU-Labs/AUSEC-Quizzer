// src/components/QuizForm.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import MagicLinkEmail from 'emails/signin-magic-link'; // Adjust the import path for the email template
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Select } from 'shadcn/ui'; // Adjust according to your actual component library
import { z } from 'zod';
import { resendClient } from '../path/to/email'; // Ensure this path is correct
import { api } from '../trpc/react'; // Adjust the import path if needed

// Define a schema using Zod for form validation
const quizSchema = z.object({
  answers: z.array(
    z.object({
      id: z.number(), // Ensure it matches your question ID structure
      answerIndex: z.number().nonnegative("An option must be selected"), // Ensure an option is selected
    })
  ),
  teamEmail: z.string().email("Invalid email address"), // Team email
});

type QuizFormData = z.infer<typeof quizSchema>;

const QuizForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      answers: [],
      teamEmail: "",
    },
  });

  const [questions, setQuestions] = useState<any[]>([]); // Adjust according to your question type
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await api.quiz.getQuizQuestions.query();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const onSubmit = async (data: QuizFormData) => {
    try {
      // Call the TRPC mutation to submit answers and get the score
      const calculatedScore = await api.quiz.submitQuiz.mutateAsync(data.answers);
      setScore(calculatedScore);

      // Send email using the resend client
      await resendClient.emails.send({
        from: "your-email@example.com", // Replace with the sender email
        to: data.teamEmail,
        subject: "Quiz Submission Confirmation",
        react: MagicLinkEmail({ verificationUrl: `https://your-quiz-url.com/score?score=${calculatedScore}` }), // Create a verification URL with score
      });

      alert("Quiz submitted successfully! Score sent via email.");
      reset(); // Reset form after submission
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <Controller
            name={`answers.${question.id}`}
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select an option">
                {question.options.map((option, index) => (
                  <option key={index} value={index}>{option}</option>
                ))}
              </Select>
            )}
          />
        </div>
      ))}
      <Controller
        name="teamEmail"
        control={control}
        render={({ field }) => (
          <div>
            <label>Team Email</label>
            <input type="email" placeholder="team@example.com" {...field} />
          </div>
        )}
      />
      <Button type="submit">Submit Quiz</Button>
      {score !== null && <p>Your score: {score}</p>}
    </form>
  );
};

export default QuizForm;
