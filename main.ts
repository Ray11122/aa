let 次数 = 0
for (let index = 0; index < 10; index++) {
    basic.showNumber(0)
    basic.showIcon(IconNames.Sword)
    次数 += 1
    basic.showNumber(次数)
}
basic.forever(function () {
    if (次数 == 10) {
        basic.showIcon(IconNames.Heart)
    }
})
