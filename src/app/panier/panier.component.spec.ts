import { PanierService } from './../panier.service';
import { PanierComponent } from './panier.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



describe('AjouterPanierComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
            PanierComponent
        ],
        imports: [
          NgbModule,
        ],
        providers: [
          { provide: PanierService }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
