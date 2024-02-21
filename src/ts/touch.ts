export class TouchManager {
  public onTap: () => void = () => {};
  public onSwipeX: (startX: number, direction: "left" | "right") => void = () => {};
  public onSwipeY: (startX: number, direction: "up" | "down") => void = () => {};
  private start = { x: 0, y: 0, time: 0 };
  private end = { x: 0, y: 0, time: 0 };

  // スワイプが X 方向か Y 方向か
  private get swipedAxis() {
    const diffX = this.end.x - this.start.x;
    const diffY = this.end.y - this.start.y;
    const diffTime = this.end.time - this.start.time;
    const velocity = Math.sqrt(diffX ** 2 + diffY ** 2) / diffTime;

    // 最小距離(px), 最小速度(px/ミリ秒), スワイプ角度（45度）
    if (Math.abs(diffX) >= 10 && Math.abs(velocity) >= 0.3 && Math.abs(diffY / diffX) <= 1) {
      return "X";
    } else if (Math.abs(diffY) >= 10 && Math.abs(velocity) >= 0.3 && Math.abs(diffY / diffX) > 1) {
      return "Y";
    } else {
      return "";
    }
  }

  constructor($element: HTMLElement) {
    $element.addEventListener("click", () => this.onTap());
    $element.addEventListener("touchstart", (e) => {
      this.start = {
        x: e.touches[0].screenX,
        y: e.touches[0].screenY,
        time: new Date().getTime(),
      };
    });
    $element.addEventListener("touchmove", (e) => {
      this.end = {
        x: e.touches[0].screenX,
        y: e.touches[0].screenY,
        time: new Date().getTime(),
      };
    });
    $element.addEventListener("touchend", (_) => {
      if (this.swipedAxis === "X") {
        const direction = this.start.x < this.end.x ? "right" : "left";
        this.onSwipeX(this.start.x, direction);
      }
      if (this.swipedAxis === "Y") {
        const direction = this.start.y < this.end.y ? "down" : "up";
        this.onSwipeY(this.start.y, direction);
      }
    });
  }
}
