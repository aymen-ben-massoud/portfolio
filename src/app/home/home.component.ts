import { Component, HostListener } from '@angular/core';
import { AppearanceAnimation, ConfirmBoxEvokeService, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    gmail = 'aymen.ben.massoud.contact@gmail.com'
  textToType: string = "HEY, I'M AYMEN BEN MASSOUD";
  typedText: string = '';
constructor(private confirmBoxEvokeService: ConfirmBoxEvokeService){}
  ngOnInit() {
    this.startTyping(0);
  }

  startTyping(index: number) {
    if (index < this.textToType.length) {
      this.typedText += this.textToType.charAt(index);
      index++;
      setTimeout(() => this.startTyping(index), 100); // Adjust the delay as needed
    }
    
  }
  
  openConfirmBox() {
   
    const subscription = this.confirmBoxEvokeService
    .customFive('','aymen.ben.massoud.contact@gmail.com' ,'ok')
    .subscribe((resp) => console.log('resp', resp));

  setTimeout(() => {
  
    subscription.unsubscribe();
  }, 2000);
}


isVisible = false;

// Detect the scroll event
@HostListener('window:scroll', [])
onWindowScroll() {
  const yOffset = window.pageYOffset;
  const viewportHeight = window.innerHeight;

  // Show button after scrolling beyond 100vh (viewport height)
  this.isVisible = yOffset > viewportHeight;
}

// Scroll to the top smoothly
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
}
