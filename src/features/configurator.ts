type Style = {
  color: string;
}

class Сonfigurator {
  private static _instance: Сonfigurator;
  style: Style = {color: ""};

  private constructor() {
      if (Сonfigurator._instance)
          throw new Error("Use Singleton.instance instead of new.");
      Сonfigurator._instance = this;
  }

  static get instanceСonfigurator() {
      return Сonfigurator._instance ?? (Сonfigurator._instance = new Сonfigurator());
  }

    public setStyle(newStyle:Style) {
    this.style = newStyle;
  }

}

const configurator = Сonfigurator.instanceСonfigurator;
export default configurator;