import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Mentor } from '../../model/mentor.model';
import { FilterOverlayPresentationComponent } from '../list-presentation/filter-overlay-presentation/filter-overlay-presentation.component';

@Injectable({
  providedIn: 'root'
})
export class ListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  private filterData: Subject<Mentor>;
  public filterData$: Observable<Mentor>;

  constructor(private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.filterData = new Subject<Mentor>();
    this.filterData$ = new Observable<Mentor>();
    this.filterData$ = this.filterData.asObservable();
  }

  onDelete(id: number){
    this.delete.next(id);
  }

  openOverlay(){
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterOverlayPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    componentRef.instance.filterData.subscribe((data) => {
      this.filterData.next(data);
      overlayRef.detach();
    });
  }
}
