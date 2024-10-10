import { withAuth } from "../middleware/with-auth";
import { procedure } from "../trpc";

const authProcedure = procedure.use(withAuth);

export default authProcedure;
