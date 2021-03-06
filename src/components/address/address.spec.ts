import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { Platform } from 'ionic-angular';
import { AddressComponent } from './address';
import { addressMock } from '../../mocks';

let fixture: ComponentFixture<AddressComponent> = null;
let instance: any = null;

describe('AddressComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        Platform
      ]
    });
  }));

  beforeEach(async(() => TestUtils.beforeEachCompiler([AddressComponent]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.autoDetectChanges(true);
  })));

  it('initialises', () => {
    expect(fixture).not.toBeNull();
    expect(instance).not.toBeNull();
  });

  it('should be a function', () => {
      expect(typeof AddressComponent).toBe('function');
  });

  it('should have instance of object', () => {
      expect(typeof fixture).toBe('object');
  });

  it('should show markup', () => {
    fixture.componentInstance.data = addressMock;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ion-card-header').innerText).toBe(addressMock.street);
  });

  it('should emit event when click', () => {
    spyOn(instance.address_click, 'emit');
    instance.click();
    expect(instance.address_click.emit).toHaveBeenCalled();
  });

});
