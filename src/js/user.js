export default class Hero {
    constructor() {
        this.defaultSetting = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
        this.userSetting = new Map();
    }

    get settings() {
        const defaultt = new Map(this.defaultSetting);
        this.userSetting.forEach((element, key) => {
            defaultt.set(key, element);
        })
        return defaultt;
    }

    setUserSettings(...arr) {
        this.userSetting.set(...arr)
    }
}