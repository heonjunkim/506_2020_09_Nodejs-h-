$(function () {
  $("button.view-btn").click(function () {
    let text = $(this).text();

    let id = $(this).data("id");

    if (text === "본문수정") {
      document.location.href = "/todo/update/" + id;
    } else if (text === "삭제") {
      if (confirm("정말 삭제할까요?")) {
        document.location.replace("todo/delete/" + id);
      }
    } else if (text === "목록으로") {
      document.location.href = "/todo/list";
    }
  });
});
