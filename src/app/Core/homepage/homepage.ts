import { Component, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceTab {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FormsModule], // استيراد FormsModule علشان ngModel يشتغل
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements AfterViewInit, OnDestroy{
// حالة الـ Header Dynamic Theme
  headerTheme: 'dark' | 'light' = 'dark';
  private observer!: IntersectionObserver;

  // حالة الـ Tabs
  activeTabId: string = 'web';

  services: ServiceTab[] = [
    {
      id: 'web',
      number: '01',
      title: 'Web Development',
      subtitle: 'DIGITAL PRESENCE, PRECISELY CRAFTED.',
      description: 'We build websites that go beyond aesthetics — performant, accessible, and engineered to scale. From marketing sites to complex web applications, every pixel and line of code is intentional.',
      capabilities: [
        'Custom design systems',
        'React & Next.js applications',
        'CMS integration',
        'Performance optimization',
        'SEO architecture',
        'Progressive Web Apps'
      ]
    },
    {
      id: 'erp',
      number: '02',
      title: 'ERP Systems',
      subtitle: 'ENTERPRISE LOGIC, SIMPLIFIED.',
      description: 'End-to-end ERP solutions built for real-world complexity. We model your business processes, automate workflows, and deliver systems your teams actually want to use.',
      capabilities: [
        'Business process modeling',
        'Inventory & supply chain',
        'Financial modules',
        'HR & payroll integration',
        'Custom reporting dashboards',
        'Multi-tenant architecture'
      ]
    },
    {
      id: 'embedded',
      number: '03',
      title: 'Embedded Systems',
      subtitle: 'HARDWARE INTELLIGENCE.',
      description: 'From microcontroller firmware to real-time operating systems, we bring software precision to hardware. Reliable, efficient, and built for the constraints of the physical world.',
      capabilities: [
        'Firmware development (C/C++)',
        'RTOS integration',
        'IoT connectivity (MQTT, BLE, Wi-Fi)',
        'PCB co-design support',
        'OTA update systems',
        'Low-power optimization'
      ]
    }
  ];

  contactData = {
    name: '',
    email: '',
    service: '',
    brief: ''
  };

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

setupIntersectionObserver() {
  const options = {
    root: null,
    // مراقبة الخط الأعلى من الشاشة مكان الـ Header تماماً
    rootMargin: '-80px 0px -80% 0px',
    threshold: 0
  };

  this.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const theme = entry.target.getAttribute('data-theme') as 'dark' | 'light';
        if (theme) {
          this.headerTheme = theme;
        }
      }
    });
  }, options);

  const sections = this.el.nativeElement.querySelectorAll('section[data-theme]');
  sections.forEach((section: HTMLElement) => this.observer.observe(section));
}

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  get currentService(): ServiceTab {
    return this.services.find(s => s.id === this.activeTabId) || this.services[0];
  }

  selectTab(tabId: string): void {
    this.activeTabId = tabId;
  }

  onSubmit(): void {
    console.log('Form Submitted:', this.contactData);
  }
}