/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {

    const ransomNoteArray = ransomNote.split('');
    const magazineArray = magazine.split('');
    let result = true;

    ransomNoteArray.forEach(element => {
        // magazineArrayにelementが含まれてない場合はfalse
        if (magazineArray.indexOf(element) === -1) {
            result = false;
        }
        // magazineArrayからelementを前方から１件削除
        magazineArray.splice(magazineArray.indexOf(element), 1);
    });
    return result;
};

// @lc code=end