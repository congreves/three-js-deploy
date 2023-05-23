import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const scriptId = 'kommunicate-script';

    if (document.getElementById(scriptId)) return;

    const kommunicateSettings = {
      appId: "32beb39ef12dddcccdbe1970d39de6d4b",
      popupWidget: true,
      automaticChatOpenOnNavigation: true
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    document.head.appendChild(script);

    window.kommunicate = window.kommunicate || {};
    window.kommunicate._globals = kommunicateSettings;
  }, []);

  return (
    <div></div>
  );
};

export default Chat;
