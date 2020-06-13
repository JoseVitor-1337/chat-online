const putScrollButton = () => {
  let chatContent = document.querySelector("div.chat-content");
  if (chatContent) {
    chatContent.scrollTop = chatContent.scrollHeight;
  }
};

export default putScrollButton;
