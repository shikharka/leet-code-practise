/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentGroups = paths.reduce((contentGroups, path) => {
    const [dir, ...files] = path.split(" ");
    files.forEach((file) => {
      const [fileName, content] = file.split("(");
      const filePath = `${dir}/${fileName}`;
      contentGroups[content]
        ? contentGroups[content].push(filePath)
        : (contentGroups[content] = [filePath]);
    });
    return contentGroups;
  }, {});
  return Object.values(contentGroups).filter((group) => group.length > 1);
};

// const paths = [
//   "root/a 1.txt(abcd) 2.txt(efgh)",
//   "root/c 3.txt(abcd)",
//   "root/c/d 4.txt(efgh)",
//   "root 4.txt(efgh)",
// ];

const paths = [
  "root/a 1.txt(abcd) 2.txt(efsfgh)",
  "root/c 3.txt(abdfcd)",
  "root/c/d 4.txt(efggdfh)",
];

console.log(findDuplicate(paths));
