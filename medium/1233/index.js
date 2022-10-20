/**
 * @param {string[]} folder
 * @return {string[]}
 */

// Works but brute force, time taking
// var removeSubfolders = function (folder) {
//   let isParentFolder = {};
//   folder.forEach((dir) => {
//     const hierarchy = dir.split("/");
//     let path = "";
//     hierarchy.forEach((d) => {
//       if (d) {
//         path += "/" + d;

//         if (!isParentFolder[path] && path === dir) {
//           Object.keys(isParentFolder)
//             .filter((key) => key.startsWith(dir))
//             .forEach((key) => (isParentFolder[key] = false));
//           isParentFolder[dir] =
//             isParentFolder[dir] != undefined
//               ? isParentFolder[dir] && true
//               : true;
//         } else if (isParentFolder[path]) {
//           isParentFolder[dir] = false;
//         }
//       }
//     });
//   });
//   return Object.keys(isParentFolder).filter((key) => isParentFolder[key]);
// };

// Much simpler solution
var removeSubfolders = function (folder) {
  folder = folder.sort();
  return folder.reduce((result, dir) => {
    if (
      result.length == 0 ||
      !dir.startsWith(result[result.length - 1] + "/")
    ) {
      result.push(dir);
    }
    return result;
  }, []);
};

// const folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
// const folder = ["/a", "/a/b/c", "/a/b/d"];
// const folder = ["/a/b/c", "/a/b/ca", "/a/b/d"];
const folder = ["/ah/al/am", "/ah/al"];

console.log(removeSubfolders(folder));
