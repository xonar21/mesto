export default class UserInfo {
    constructor(info) {
        this._name = document.querySelector(info.profileName);
        this._subname = document.querySelector(info.profileSubName);
        
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            subname: this._subname.textContent,
          };
    }

    setUserInfo(name, subname) {
        this._name.textContent = name;
        this._subname.textContent = subname;
      }
}