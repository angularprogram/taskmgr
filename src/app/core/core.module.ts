import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdIconRegistry} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';

import 'hammerjs';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  // 如何让CoreModule在系统中只加载一次，如下：
  constructor(
    @Optional() @SkipSelf() parent:CoreModule,
    ir: MdIconRegistry,
    st: DomSanitizer
  ) {    //在CoreModule这个类的构造函数中进行依赖注入
    if (parent) {
      // 如果系统当中已经存在一个CoreModule，抛出系统异常
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, st);
  }
}
