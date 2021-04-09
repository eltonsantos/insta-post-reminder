const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    // console.log(permission);
    if (permission !== "granted") {
      throw new Error("Permission denied");
    }
  },
  
  notify({ title, body, icon }){
    return () => new Notification(title, {
      body,
      icon
    })
  }
}

export default Notifyer;