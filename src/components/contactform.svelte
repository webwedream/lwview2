<script>
import { goto } from "$app/navigation";


  let rawBody = {
    to: "",
        text: "",
        isBot: false
  };
  /**
   * 
   * @param {MouseEvent} evt
   */
  async function onClick(evt) {
    evt.preventDefault();
    try {
      if (rawBody.isBot == false) {
        const resp = await fetch("/contactUs", {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          method: "POST",
          body: JSON.stringify(rawBody)
        });
        const respBody = await resp.json();
        console.log(respBody);
        if (respBody.sendSuccessful) {
          goto("/thankYou");
        }
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to file a bug report or feature recommendation? Want to consult us about a project? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required bind:value={rawBody.to} />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea bind:value={rawBody.text} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Describe your project or the reason why you are contacting us. And weather or not you would like to meet with us..."></textarea>
          </div>
          <button type="submit" on:click={onClick} class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>