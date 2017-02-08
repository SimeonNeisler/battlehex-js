import {IdentityManager, UserManager} from './managers';
import AuthController from './controllers/AuthController.js'

let data;
export default function init() {
  if (!data) {
    const identityManager = new IdentityManager();
    const userManager = new UserManager();
    const authController = new AuthController(identityManager, userManager);
    data = {
      identityManager,
      userManager,
      authController
    }
  }
  return data;
}
