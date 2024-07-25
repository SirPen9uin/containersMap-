import Hero from '../user'


test('testing without user settings', () => {
    const hero = new Hero()
    const result = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']])
    expect(hero.settings).toEqual(result)
})  

test('testing with user settings', () => {
    const hero = new Hero()
    hero.setUserSettings('theme', 'gray')
    hero.setUserSettings('music', 'pop')
    hero.setUserSettings('difficulty', 'nightmare')
    const result = new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'nightmare']])
    expect(hero.settings).toEqual(result)
})  

test('testing with new user settings', () => {
    const hero = new Hero()
    hero.setUserSettings('language', 'idish')
    const result = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy'], ['language', 'idish']])
    expect(hero.settings).toEqual(result)
})  