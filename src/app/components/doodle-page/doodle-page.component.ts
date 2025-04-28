import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import {  ReactiveFormsModule  } from '@angular/forms';
import { DoodlrApiService } from '../../services/doodlr-api.service';
import { DoodleTransferService } from '../../services/doodle-transfer.service';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core'
import {v4 as uuidv4} from 'uuid';

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
  public doodle: File;
  private createdDoodle: any;

  private clickX: number[] = [];
  private clickY: number[] = [];
  private clickDrag: boolean[] = [];
  private canvasState = [];
  
  penStyle = 'black';
  defaultPenWidth = 1;

constructor(private doodlerApiService: DoodlrApiService, private router: Router, private doodleTransferService: DoodleTransferService){}

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
    context!.strokeStyle = this.penStyle;
    context!.lineWidth = this.defaultPenWidth;


    this._canvas = _canvas;
    this.context = context!;

    this._canvas.width = window.innerWidth * 0.75 ;
    this._canvas.height = window.innerHeight * 0.50;

    this.redraw();
   };

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

   private releaseEventHandler = () => {
    this.paint = false;
    this.redraw();
    console.log(this.canvasState)
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
      this.grabdoodle();
    }

    e.preventDefault();
   };

   public switchToPencil(){
    this.context!.strokeStyle = this.penStyle
   }

   public turnToFile(blob: Blob){
    let fileName: string = uuidv4() + ".png";
    this.doodle = new File([blob], fileName, { type: blob.type, lastModified: Date.now()})
    return this.doodle
   }

   public grabdoodle() {
    const Canvas = <HTMLCanvasElement> document.getElementById("canvas")
    Canvas.toBlob(blob => 
      this.doodle = this.turnToFile(blob!)
    )
  }


  public clearCanvas(){
    let confirmation = confirm("this will reset the entire canvas are you sure ?")
    if (confirmation == true) {
      window.location.reload()
    }
  }

  public undoCanvas(){
   /// load the files in the array 
  }

  public takeToForm(){
    this.doodleTransferService.doodleForForm = this.doodle;
    this.router.navigate(['/doodleForm'], {skipLocationChange: true})
  }

  private limitArrayLength(){
    if (this.canvasState.length > 2){
      this.canvasState.pop();
    }
  }

  
}