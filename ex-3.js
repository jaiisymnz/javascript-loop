// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here


for( let i in scores){
    if(minScore==undefined) minScore=scores[i];
    if(scores[i]<minScore) minScore=scores[i];
}



console.log(minScore);
