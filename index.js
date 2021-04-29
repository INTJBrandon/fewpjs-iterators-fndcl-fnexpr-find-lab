
function superbowlWin(team) {
    const win = team.find(e => e.result === "W")

    if (win) {
        return win.year
    }
}