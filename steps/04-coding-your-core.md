---
layout: step
title:  Coding Your Core
prev:   03-claiming-your-spark.html
next:   05-exposing-variables.html
---

Now that we have claimed our core and are logged into the Spark Cloud we can
begin writing some code to run on our core.

Go to [https://build.spark.io/build](https://build.spark.io/build) to access the
Spark Cloud web interface.  This is where we will be programming our spark from.

Lets start by loading the __Blink an LED__ example app.  Don't worry that we
haven't hooked an LED up to our Spark yet.  There is a small blue LED right near
the USB port on the Spark which we will make blink to test that our setup is
working properly.

Once you have loaded the example app click the lightning bolt icon in the top
right of the screen.  This will load the code you've written onto your core and
restart it for you.

<div style="text-align:center">
  <img src="{{ site.baseurl }}/assets/img/flash.png" alt="Flash Icon">
</div>

Now your core will load the code you sent it and restart.  Once it restarts you
should see the little blue LED blinking on and off every second.

Now lets move on to exposing a variable from our spark so that we can read it
later on.
