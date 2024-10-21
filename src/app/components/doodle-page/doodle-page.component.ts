import { Component, AfterViewInit, HostListener } from '@angular/core';
import {  ReactiveFormsModule  } from '@angular/forms';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { CommonModule } from '@angular/common';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-doodle-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doodle-page.component.html',
  styleUrl: './doodle-page.component.css'
})
export class DoodlePageComponent implements AfterViewInit {
  private _canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private paint: boolean;
  doodlForm = new FormData();
  public doodl: File;
  private title = document.querySelector("input")

  private clickX: number[] = [];
  private clickY: number[] = [];
  private clickDrag: boolean[] = [];

  @HostListener('document:mousedown', ['$event'])
  pressMouseEventHandler(event:MouseEvent) {
    this.pressEventHandler(event);
  };

  @HostListener('document:touchstart', ['$event'])
  pressTouchEventHandler(event:TouchEvent) {
    this.pressEventHandler(event);
  };

  @HostListener('document:mousemove', ['$event'])
  mouseDragEventHandler(event:MouseEvent) {
    this.dragEventHandler(event);
  };

  @HostListener('document:touchmove', ['$event'])
  touchDragEventHandler(event:TouchEvent) {
    this.dragEventHandler(event);
  };

  @HostListener('document:mouseup', ['$event'])
  mouseReleaseEventHandler(event:MouseEvent) {
    this.releaseEventHandler();
  };

  @HostListener('document:mouseup', ['$event'])
  touchReleaseEventHandler(event:TouchEvent) {
    this.releaseEventHandler();
  };

  @HostListener('document:touchcancel', ['$event'])
  cancelMouseEventHandler() {
    this.cancelEventHandler();
  };

  @HostListener('document:touchcancel', ['$event'])
  cancelTouchEventHandler() {
    this.cancelMouseEventHandler();
  };
  
  ngAfterViewInit() {
    let _canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let context = _canvas.getContext('2d');
    context!.lineCap = 'round';
    context!.lineJoin = 'round';
    context!.strokeStyle = 'black';
    context!.lineWidth = 1;
    
    this._canvas = _canvas;
    this.context = context!;

    this.redraw();
   };

   constructor(private doodlerApiService: DoodlrApiService,
                private storageService: StorageService
   ) {}

   private redraw() {
    let clickX = this.clickX;
    let context = this.context;
    let clickDrag = this.clickDrag;
    let clickY = this.clickY;
    for (let i=0;i < clickX.length; i++) {
      context.beginPath();
      if (clickDrag[i] && i) {
        context.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        context.moveTo(clickX[i] - 1, clickY[i]);
      }

      context.lineTo(clickX[i], clickY[i]);
      context.stroke();
    }
    context.closePath();
   };

   private addClick(x: number, y: number, dragging: boolean) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
   };

   public clearCanvas() {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
   };
  
   private releaseEventHandler = () => {
    this.paint = false;
    this.redraw();
   };

   private cancelEventHandler = () => {
    this.paint = false;
   };

   private pressEventHandler(e: MouseEvent | TouchEvent) {
    let mouseX = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageX
      : (e as MouseEvent).pageX;
    let mouseY = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageY
      : (e as MouseEvent).pageY;
    mouseX -= this._canvas.offsetLeft;
    mouseY -= this._canvas.offsetTop;

    this.paint = true;
    this.addClick(mouseX, mouseY, false);
    this.redraw();
    this.grabDoodl()
   };

   private dragEventHandler(e: MouseEvent | TouchEvent) {
    let mouseX = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageX
      : (e as MouseEvent).pageX
    let mouseY = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageY
      : (e as MouseEvent).pageY
    mouseX -= this._canvas.offsetLeft;
    mouseY -= this._canvas.offsetTop;

    if (this.paint){
      this.addClick(mouseX, mouseY, true);
      this.redraw();
      this.grabDoodl();
    }

    e.preventDefault();
   };

   public grabTitle(e: Event){
      const title = e.currentTarget as HTMLInputElement;
      this.doodlForm.append("title", title!.value);
   }

   public nameGenerator(): string{
    let phrase = ["Omega", "Alpha", "Sigma"];
    let randomPhrase = Math.floor(Math.random() * phrase.length);
    let randomChars = (Math.random() * 10).toString(36).substring(7);
    let generatedName = randomChars + randomPhrase + ".png";
    return generatedName;
   }

   public turnToFile(blob: Blob){
    let fileName: string = this.nameGenerator();
    this.doodl = new File([blob], fileName, { type: blob.type, lastModified: Date.now()})
    return this.doodl
   }
   //this is a debug function to see how the images worked
   public previewBlob(blob: Blob){
    const image = document.createElement("img");
    const url = URL.createObjectURL(blob);
    image.onload = () => {
      URL.revokeObjectURL(url);
    };
    image.src = url;
    document.body.appendChild(image);
  }

   public grabDoodl() {
    const Canvas = <HTMLCanvasElement> document.getElementById("canvas")
    Canvas.toBlob(blob => {
      return this.turnToFile(blob!);
    })
  }
  public postDoodl(){
    this.doodlForm.append("image", this.doodl!, this.doodl.name!);
    this.doodlerApiService.postDoodle(this.doodlForm).subscribe()
    }
}
