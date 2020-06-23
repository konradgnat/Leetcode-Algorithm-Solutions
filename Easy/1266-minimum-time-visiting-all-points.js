/**
 * 1266. Minimum Time Visiting All Points
Easy

On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.
 

Example 1:


Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
Example 2:

Input: points = [[3,2],[-2,2]]
Output: 5
 

Constraints:

points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000
 */

/**
 * Time: O(n)
 * Space: O(1)
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    const len = points.length;
    let count = 0;
    if (len <= 1) return count;
    for (let i = 1; i < len; i++) {
        let x = Math.abs(points[i - 1][0] - points[i][0]);
        let y = Math.abs(points[i - 1][1] - points[i][1]);
        console.log(x, y);
        count += Math.max(x, y);
    }
    return count;
};
