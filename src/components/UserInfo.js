export default class UserInfo {
    constructor(info) {
        this._name = document.querySelector(info.profileName);
        this._subname = document.querySelector(info.profileSubName);
        this._avatar = document.querySelector(info.profileAvatar);
        this._id = 0;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            subname: this._subname.textContent,
          };
    }

    setUserInfo({name, subname}) {
        this._name.textContent = name;
        this._subname.textContent = subname;
      }

    setUserAvatar(link) {
        this._avatar.src = link;
    }

    setUserId(id) {
        this._id = id;
    }

    getUserID() { return this._id; }


    getUserAvatar() {
        return this._avatar.src;
      }
}