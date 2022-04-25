import { app } from "./start";
import * as path from "path";
/**

 * App Variables

 */

const PORT: number = 8080;

/**

 * Server Activation

 */

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
