    function toast({ title = '', message = '', type = 'success', duration = 3000 }) {
      const main = document.getElementById('toast');
      if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast__${type}`);
        
        const icons = {
          success: "fas fa-check-circle",
          info: "fas fa-info-circle",
          error: "fas fa-exclamation-circle",
          warning: "fas fa-exclamation-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2); // Làm tròn 2 chữ số thập phân
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
          <div class="toast__icon">
            <i class="${icon}"></i>
          </div>
          <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
          </div>
          <div class="toast__close" onclick="this.parentElement.remove()">
            <i class="fa-regular fa-circle-xmark"></i>
          </div>
        `;

        main.appendChild(toast);

        // Xóa toast sau khi kết thúc animation
        setTimeout(() => {
          toast.remove();
        }, duration + 1000); // Thời gian = duration + thời gian fadeOut
      }
    }

    function GetSuccessToast() {
      toast({
        title: 'Thành công',
        message: 'Chúc mừng! Bạn đã tạo tài khoản thành công!',
        type: 'success',
        duration: 3000,
      });
    }

    function GetErrorToast() {
      toast({
        title: 'Thất bại',
        message: 'Tạo tài khoản không thành công! Vui lòng thử lại sau!',
        type: 'error',
        duration: 3000,
      });
    }