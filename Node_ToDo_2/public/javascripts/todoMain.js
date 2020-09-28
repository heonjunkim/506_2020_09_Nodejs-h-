$(function () {
  $("button.btn-delete").click(function () {
    let text = $(this).text();
    let id = $(this).data("id");
    if (text === "삭제") {
      if (confirm("정말 삭제할까요?")) {
        document.location.replace("/delete/" + id);
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input[name='t_text']");
    let t_text = todo_input.value;
    if (t_text === "") {
      alert("하고싶은거 입력 !");
      document.querySelector("input[name='t_text']").focus();
      return false;
    }
    if (confirm("저장할까요?")) {
      document.querySelector("form").submit();
    }
  });
});
