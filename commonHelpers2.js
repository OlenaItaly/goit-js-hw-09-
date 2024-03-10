import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".form"),r=`
<form class="login-form">
      <label class="label-task4">
        Email
        <input type="email" name="email" class="input-task4" />
      </label>
      <label class="label-task4">
        Password
        <input type="password" name="password" class="input-task4"/>
      </label>
      <button type="submit" class="btn-task4">Login</button>
    </form>`;a.insertAdjacentHTML("beforeend",r);const n=document.querySelector(".login-form");n.addEventListener("submit",o);function o(e){e.preventDefault();const{email:t,password:l}=e.currentTarget.elements;if(t.value.trim()===""||l.value.trim()==="")return alert("All form fields must be filled in");const s={email:t.value.trim(),password:l.value.trim()};console.log(s),e.currentTarget.reset()}
//# sourceMappingURL=commonHelpers2.js.map
