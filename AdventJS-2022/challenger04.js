

function fitsInOneBox(boxes) {
    let nextBox;
    const results = [];
    boxes.sort((a, b) => {
        if (a.l < b.l && a.w < b.w && a.h < b.h) {
            return -1;
        }
        if (a.l > b.l && a.w > b.w && a.h > b.h) {
            return 1;
        }
        return 0;
    });

    boxes.map((box, index) => {
        const { l, w, h } = box;

        if (index + 1 !== boxes.length) {
            nextBox = boxes[index + 1];
            if (l < nextBox.l && w < nextBox.w && h < nextBox.h) {
                results.push(true);
            } else {
                results.push(false)
            }
        }
    });
    return !(results.includes(false))
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes))
