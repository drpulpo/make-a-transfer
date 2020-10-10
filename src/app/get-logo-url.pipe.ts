import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getLogoUrl' })
export class GetLogoUrlPipe implements PipeTransform {
  transform(receiver: string): string {
    let url: any = './assets/icons/';
    switch (receiver) {
      case 'Backbase':
        url += 'backbase.png';
        break;
      case 'The Tea Lounge':
        url += 'the-tea-lounge.png';
        break;
      case 'Texaco':
        url += 'texaco.png';
        break;
      case 'Amazon Online Store':
        url += 'amazon-online-store.png';
        break;
      case '7-Eleven':
        url += '7-eleven.png';
        break;
      case 'H&M Online Store':
        url += 'h&m-online-store.png';
        break;
      case 'Jerry Hildreth':
        url += 'jerry-hildreth.png';
        break;
      case 'Lawrence Pearson':
        url += 'lawrence-pearson.png';
        break;
      case 'Whole Foods':
        url += 'whole-foods.png';
        break;
      case 'Southern Electric Company':
        url += 'southern-electric-company.png';
        break;
      case 'Arrows':
        url += 'arrows.png';
        break;
      case 'Briefcase':
        url += 'briefcase.png';
        break;
    }
    return url;
  }
}
