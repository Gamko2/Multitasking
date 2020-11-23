function findTaskTime(tasks: number[], cooldown: number) {
    let currentTasks = new Array();
    let result: number = 0;
    let cooldownTimer = cooldown
    tasks.forEach(task => {
        if (currentTasks.includes(task)) {
            result += currentTasks.length + cooldownTimer;
            currentTasks = [];
            currentTasks.push(task)
        }
        else {
            currentTasks.push(task);
            if (cooldownTimer > 0 && currentTasks.length > 1) {
                 cooldownTimer -= 1;
            }
        }
    })
    return result + currentTasks.length;
}
console.log(findTaskTime([1, 2, 3, 1, 2, 3, 1, 2, 3], 5));


