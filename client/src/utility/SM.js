export function updateMemItem(index, difficulty, lastTest, daysBetweenReview, performance) {
    // http://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2

    // time since last review, if no last time then set to 0
    var timeSinceLastReview = lastTest ? Date.now() - new Date(lastTest).getTime() : 0
    // console.log(timeSinceLastReview);
    // the percentage overdue, with a max of 200%
    var overdue = 1
    if(daysBetweenReview) {
        overdue = performance === 1 ? Math.min(2, timeSinceLastReview / daysBetweenReview) : 1
    } 
    // difficulty rating 
    difficulty = difficulty + overdue * (1 / 17) * (8 - 9 * performance)
    
    // clamp between 0.4 and 3
    difficulty = Math.min(Math.max(difficulty, 0.4), 2)

    // difficulty weight to be used for days between review calculation 
    var difficultyWeight = difficulty

    // days between review calculation
    if(daysBetweenReview) {
        daysBetweenReview *= performance === 1 ? 1 + (difficultyWeight) * overdue : 1 / Math.pow(difficultyWeight, 2)
    } else {
        daysBetweenReview = performance === 1 ? 1 + (difficultyWeight) * overdue : 1 / Math.pow(difficultyWeight, 2)
    }

    daysBetweenReview = Math.min(Math.max(daysBetweenReview, 0.001), 10)

    // return an object with our new values
    return  {
        index: index,
        difficulty: difficulty,
        days_between_review: daysBetweenReview,
        last_studied: Date.now()
    }
}

export function shouldAppendToQueue(lastTest, daysBetweenReview){
    if (new Date(lastTest).getTime() + daysBetweenReview * 24 * 60 * 60 <= Date.now()) {
        return true;
    }
    return false;
}

export function initQueue(set){
    var queue = [];

    for(var i = 0; i < set.length; i++) {
        queue.push(i);
    }

    return queue;
}