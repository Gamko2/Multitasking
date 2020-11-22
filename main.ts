function findTaskTime(tasks: number[], cooldown: number) {
    let currentTasks = new Array();
    let result: number = 0;
    let cooldownTimer = cooldown
    for (let i = 0; i < tasks.length; i++) {
        if (currentTasks.includes(tasks[i])) {
            result = result + currentTasks.length + cooldownTimer;
            currentTasks = [];
            currentTasks.push(tasks[i])
        }
        else {
            currentTasks.push(tasks[i]);
            if (cooldownTimer > 0 && currentTasks.length > 1) {
                cooldownTimer = cooldownTimer - 1;
            }
        }
    }
    return result + currentTasks.length;
}
console.log(findTaskTime([1, 1, 2, 1, 2], 2));


