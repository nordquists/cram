export function updateMemItem(index, difficulty, lastTest, daysBetweenReview, performance) {
    // http://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2

    // time since last review, if no last time then set to 0
    var timeSinceLastReview = lastTest ? Date.now() - lastTest : 0
    // console.log(timeSinceLastReview);
    // the percentage overdue, with a max of 200%
    if(daysBetweenReview) {
        var overdue = performance === 1 ? Math.min(2, timeSinceLastReview / daysBetweenReview) : 1
    } else {
        var overdue = 1
    }
    
    // difficulty rating 
    var difficulty = difficulty + overdue * (1 / 17) * (8 - 9 * performance)
    
    // clamp between 0 and 3
    difficulty = Math.min(Math.max(difficulty, 0), 3)

    // difficulty weight to be used for days between review calculation 
    var difficultyWeight = 3 - 1.7 * difficulty

    // days between review calculation
    if(daysBetweenReview) {
        daysBetweenReview *= performance === 1 ? 1 + (difficultyWeight - 1) * overdue : 1 / Math.pow(difficultyWeight, 2)
    } else {
        daysBetweenReview = performance === 1 ? 1 + (difficultyWeight - 1) * overdue : 1 / Math.pow(difficultyWeight, 2)
    }


    // return an object with our new values
    return  {
        index: index,
        difficulty: difficulty,
        days_between_review: daysBetweenReview,
        last_test: Date.now()
    }
}

export function shouldAppendToQueue(){
    return false
}

export function initQueue(set){
    var queue = [];

    for(var i = 0; set.length; i++) {
        queue.push(i);
    }

    return queue;
}