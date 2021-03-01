---
layout: page
title: Cookie settings
permalink: /cookie-settings/
---

<form class="space-y-8 divide-y divide-gray-200">
 <div class="pt-8">
      <div>
        <h3 class="text-lg font-medium text-gray-900 leading-6">
            Cookie settings
        </h3>
        <p class="mt-1 text-sm text-gray-500">
We use cookies to analyze our traffic. These cookies collect information that is used in aggregate form to help us understand how our websites are being used. You can find more information in our <a href="{{"/privacy-policy" | prepend: site.baseurl | prepend: site.url }}">privacy policy</a> .
        </p>
      </div>
      <div class="mt-6">
        <fieldset>
          <div class="mt-4 space-y-4">
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="consent_performance" name="consent_performance" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
              </div>
              <div class="ml-3 text-sm">
                <label for="consent_performance" class="font-medium text-gray-700">Performance cookies</label>
                <p class="text-gray-500">We use Google analyitics to analyize site performance</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>

<div class="pt-5">
    <div class="flex justify-end">
      <button type="button" id="consent_save" class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  </div>
</form>
