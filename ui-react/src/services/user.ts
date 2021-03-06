import { User } from "commonTypes";
import config from "config";
import http from "lib/http";

class UserService {
  public me = async () => {
    const res = await http<{ me: User }>(`${config.apiUrl}/users/me`);

    if (res) {
      return res.me;
    }
  };

  public signOut = async () => {
    await http(`${config.apiUrl}/auth/logout`);
  };
}

export default new UserService();
