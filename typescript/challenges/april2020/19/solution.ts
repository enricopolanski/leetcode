// TODO: find more idiomatics (this still beats 95% of JS implementations)
export var search = function (nums: number[], target: number): number {
  const sol = nums.indexOf(target)
  return sol !== null ? sol : -1
};