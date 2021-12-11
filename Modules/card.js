const app = document.getElementById("app");

let answerList = document.getElementsByClassName("answer");
let addList = document.getElementsByClassName("add");
let minusList = document.getElementsByClassName("minus");

const title = document.createElement("div");
title.classList.add("title");
title.innerHTML = "FAQ?";

const container = document.createElement("div");
container.classList.add("container");

const displayOne = new Display(
  "1. Tại sao bài viết đã được Công khai nhưng không xuất hiện trên feed?",
  "Do lượng bài viết nhiều, hệ thống Tiki đôi khi có thể quá tải khiến phải mất vài phút đến vài giờ để cập nhật nội dung. Vì vậy, vui lòng chờ trong giây lát trong thời gian hệ thống xử lý. "
);

const displayTwo = new Display("2. Tôi có thể chỉnh sửa bài viết đã được đăng không?", "Hiện tại chưa có chức năng chỉnh sửa bài viết được đăng. Tuy nhiên, bạn có thể sao chép nguyên bản 1 bài viết đã đăng để chỉnh sửa lại nội dung và tạo 1 bài viết mới.");

const displayThree = new Display(
  "3. Tại sao bài viết đã được đăng rất lâu nhưng không có lượt tương tác?",
  "Nội dung bài viết chưa đủ hấp dẫn với khách hàng. Cách xử lý: Cải thiện nội dung bài viết, hình ảnh hiển thị, và kiểm tra độ hiệu quả sau khi đã cải thiện"
);

container.appendChild(displayOne.render());
container.appendChild(displayTwo.render());
container.appendChild(displayThree.render());

displayOne.$add.addEventListener("click", () => {
  unhideAnswer(0);
});
displayOne.$minus.addEventListener("click", () => {
  hideAnswer(0);
});

displayTwo.$add.addEventListener("click", () => {
  unhideAnswer(1);
});
displayTwo.$minus.addEventListener("click", () => {
  hideAnswer(1);
});

displayThree.$add.addEventListener("click", () => {
  unhideAnswer(2);
});
displayThree.$minus.addEventListener("click", () => {
  hideAnswer(2);
});

function unhideAnswer(index) {
  answerList[index].classList.add("unhide");
  addList[index].classList.add("hide");
  minusList[index].classList.add("unhide");
}

function hideAnswer(index) {
  answerList[index].classList.remove("unhide");
  minusList[index].classList.remove("unhide");
  addList[index].classList.remove("hide");
}

app.appendChild(title);
app.appendChild(container);