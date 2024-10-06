import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLoggedIn: boolean = false; // حالة تسجيل الدخول

  constructor(private router: Router) { }

  ngOnInit() {
    // التحقق من حالة تسجيل الدخول عند تحميل المكون
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  // دالة لتسجيل الخروج
  logout() {
    localStorage.removeItem('isLoggedIn'); // إزالة حالة تسجيل الدخول
    this.isLoggedIn = false; // تحديث الحالة
    this.router.navigate(['/LogIn']); // توجيه المستخدم إلى صفحة تسجيل الدخول
  }
}
