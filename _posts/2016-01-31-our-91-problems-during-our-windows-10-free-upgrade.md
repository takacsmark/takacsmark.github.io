---
layout: post
title:  "Our 9+1 Problems During Our Windows 10 Free Upgrade"
description: "I faced issues during a Windows 10 free upgrade that could happen to anyone in everyday situations. I provide tips and solutions in this post."
date:   2016-01-31 16:38:44 +0100
categories: Hobby
thumbnail: "/assets/images/post-thumbs/window-10-install-post.png"
---
**I created this post, because I faced issues during a Windows 10 free upgrade that could happen to anyone in everyday situations.**

**Still, some solutions I found on-line are not meant for the average user.**

**I decided to share my experience today to help others overcome some of the pain or save you some time.**

**If you are looking for tips and solutions, I'll provide them in this post.**

*This post is not against Microsoft, as you'll see most of our problems are caused by external circumstances. I think it's still worth reading for MS folks, maybe you guys can improve our experience by addressing some of this stuff.*

This story happened to me and my father-in-law just yesterday. He's always been a very accurate person, like most 74 year olds, he takes technical warnings seriously and he is very keen to keep deadlines.

So, no wonder, that the Windows 10 upgrade had been on our table for a while now. Every time we meet, he keeps telling me that Windows sent him an upgrade message again, and it must be getting seriously urgent to carry out this task.

**Myself, being a user of all mayor operating systems, have the opinion that an on-line payable Windows 10 may be the point when the elderly will be looking for a viable alternative.** So I tend to disagree with the urgency of the matter.

Macs are usually not affordable for the elderly and I haven't met a good Linux distro for senior people. I would not try to walk the path of learning Linux with all seniors in the family, so we decided to stick with Windows for now.

So it happened that I hopped into the car with my MacBook Air in my bag and went over to my father-in-law's place to make the big step.

## The starting setup

His machine is about 6 years old, and it's still in a really good shape. Windows pop up and fly around instantaneously as you work. The machine is in a traditional midi case, which makes it easy to repair or upgrade.

We added a 40GB SSD recently and yesterday we decided to add another 120GB and make that new SSD the new system disk. The plan was to install our legal copy of Windows 7 from a clean install iso onto the new disk, and upgrade it to Windows 10 with the free upgrade.

## The 9+1 problems of our Windows 10 upgrade in order of appearance

After purchasing the SSD at a surprisingly good price, we returned to my father-in-law's house and started the process.

I list our activities and challenges in the order as they appeared.

Some points are usual challenges, I hope I can give you some good hints to solve them. Some other points are frustrating problems, I hope I can save some time for fellow family technicians.

## 1. Windows 7 cannot load the user profile

I wanted to start the process by creating a bootable USB stick in the old Windows 7 system that was originally on the machine. I expected some issues, but the fact, that I could not even logon to Windows 7 came early.

I got stuck on the login screen with the message "The User Profile Service failed the logon. User profile cannot be loaded". [I was not the first person facing this problem, there is a related answer on Microsoft's support site.](https://support.microsoft.com/en-us/kb/947215)

Let me show you the nature of the problem by quoting the official explanation:
>Occasionally, Windows might not read your user profile correctly, such as if your antivirus software is scanning your computer while you try to log on.

Now, this sounds weird. Let's see the solution. You'll have to restart your computer in safe mode and edit certain entries in your Registry manually. You can find the full solution behind the [MS support link I posted above](https://support.microsoft.com/en-us/kb/947215).

![Windows regisrty edit](/assets/images/in-content/ms-registry-edit.png)

Finally I could log on after rebooting and face the real challenge.

## 2. How to download the Windows 7 installation iso?

This step went a lot smoother than I anticipated. I found a [direct Windows 7 download link on Microsoft's site](https://www.microsoft.com/en-us/software-download/windows7).

The page is super helpful, because it gives you the available Windows 7 versions for your own license key. You won't waste time trying to install the home edition with a professional license, for instance.

I downoaded the 64 bit version, [you can check if your computer shall run a 32 bit or 64 bit version based on this guide (for Windows)](https://windows.microsoft.com/en-us/windows7/find-out-32-or-64-bit).

## 3. How to create a Windows 7 bootable install USB?

Now that the iso image was downloaded, it was time to create a bootable USB stick. Well, USBs are easy to find these days, so that's why I planned to go with this option.

According to MS, a 4GB stick shall be enough. My smallest stick had 8 GB, so I cannot confirm a smaller number, but 8 GB is enough for sure.

[Microsoft officially provides a tool to create bootable USB sticks or DVDs from downloaded iso installation images.](https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool) The tool is easy to use, unfortunately I cannot give any feedback about the results.

Why, you may ask? Because my father-in-law's PC cannot boot from a USB stick. I found this out after writing three different sticks. Well, it took some time...

This may have something to do with the fact that it was thunderstruck two times in the last year.

I tried [another USB creator tool, called Rufus,](https://rufus.akeo.ie/) before I realized that the problem is with the PC.

I tried to burn the iso to DVD with Microsoft's USB/DVD download tool, but failed miserably. I cannot tell if this is a fault of the tool or the frequent thunder storms attacking my family.

To be completely fair, let me add that my Mac was able to boot from the Windows 7 install USB created by Rufus (I did not check the USB created by the MS download tool).

And so I had to face a new problem.

## 4.  How to install Windows 7 if your computer cannot boot from USB and DVD?

We were still able to boot from the old Windows 7 installation on the old SSD. So I plugged in the installation USB that I could not use for booting and started browsing the files in Windows Explorer.

I found `setup.exe` on the USB and launched it manually and the setup started. On one hand I was very happy to move on, on the other hand I was wondering what problems this method will bring.

The setup went smoothly and Windows was intelligent enough to give me options to choose between the old and the new Windows 7 installation during the boot sequence.

So far so good. So now that the new SSD with the fresh Windows 7 system is in place, will we be able to boot it as the main system?

No,we won't. Let's see why.

## 5. How to change Windows boot setup if you have multiple Windows instances?

It turns out, that even though the new partition on the new SSD is bootable and active (you can set these things in Disk Manager), Windows will boot from something called the system partition.

The system partition is created and managed by Windows automatically. Since we installed Windows from another running instance, Windows kept the system partition on the old SSD and added the boot menu, where we can choose from the two Windows 7 systems we have.

This would not be a problem if we could boot from an install USB and run the setup from there for one drive.

According to the official documentation booting an install disk/USB or a system repair disk can resolve the issue.

All I had to do was writing a system repair CD from within Windows. I was not able to write setup DVDs before, but the repair CD was no problem.

Then I set the new SSD as the main drive in BIOS (alternatively you can disconnect the drive physically), boot from the repair disk and run Boot repair.

I had to repeat this step twice, before finally I was able to boot from the new SSD.

## 6. How to install a USB Wi-Fi dongle that is not recognized by Windows?

I thought we are ready for the upgrade, but the internet connection was not working on the shiny new instance. Our ISP gave my father-in-law a USB Wi-Fi dongle that Windows 7 won't recognize out of the box.

No problem, we killed bigger problems today. Just googled "usb wi-fi dongle windows 7 driver" on my Mac, and copied a couple of drivers to my USB stick (yeah the one that won't boot).

**It's always a good idea to have another internet connected computer with you if you are installing a new operating system on a new disk.**

Device manager automatically found and installed the right driver from the USB. Now we were really ready to start the upgrade.

## 7. What happens if you try to upgrade to Windows 10 on a legal Windows 7 copy that is not activated?

I guess all the above fooling around took us somewhere between 4-5 hours, so I was really hoping for a quick upgrade. I was so mistaken.

The free Windows 10 upgrade starts by downloading the package, getting some stuff ready and checking for updates. These steps took us 2 hours.

Then suddenly a screen popped up asking for the Windows 10 product key. This screen was not supposed to come, because we were upgrading a legal, rightful copy.
The Windows 7 product key didn't work here and we have no Windows 10 product key in the process.

**You can only upgrade a registered copy of Windows 7 to Windows 10. Giving the product key during Windows 7 installation is not enough. You have to explicitly run Windows registration from the start menu on Windows 7.**

**It takes about 3 seconds.**

**If you do not register your copy of Windows 7 the upgrade will not check at the beginning, but won't let you proceed after a 2 hours process. Registering your copy during the process won't work, the upgrade process won't pick it up. You'll have to start over.**

**AND GUESS WHAT!? WINDOWS WON'T USE THE UPGRADE FILES THAT IT JUST DOWNLOADED FOR TWO HOURS, IT WILL START ALL OVER AGAIN. FOR ANOTHER TWO HOURS, UNTIL YOU SEE IF YOUR REGISTRATION WORKED.**

Finally we got past the product key point only to see a new problem.

## 8. What to do if your Windows 10 upgrade hangs during the "downloading updates" step?

We run into another "Checking for updates" cycle after we passed the product key point.

We've been silently waiting. My father-in-law dosed off in his chair and I was installing various Linux distros in VirtualBox on my Mac to try a few distros and desktop environments for my development box, because I grew tired of Kali and Gnome3.

After about an hour I grew suspicious. Even though I'm not using Windows, I used it for years and the old reflex came back in a blink of an eye.

Ctr+Shift+Esc for Task manager! I found that the upgrade process was not using any RAM, Network or CPU. It was not hanging, it just looked like it was not doing anything.

After some desparate googling on my Mac I found the following [answer on Microsoft answers](https://answers.microsoft.com/en-us/insider/forum/insider_wintp-insider_install/window-10-install-stuck-on-checking-for-updates/e294932f-149e-412b-b996-6f1253973399):

* open cmd
* type "net stop wuauserv"  (this will stop windows update service)
* wait for a few minutes
* type "net start "wuauserv"  (this will start windows update service).

WOW...

Since the upgrade is running as a process in Windows 7 you can open `cmd` and run the above magic. I have no idea how my father-in-law or any sane user is supposed to address this, but I'm here, so let's move on.

After I stopped the service, I saw immediate progress. If I restarted service, the process stopped. So I stopped the service until the download update reached 100% and we saw the next screen. Then I restarted the service and tried to forget the incident.

## 9. How to change the display language on Windows 10?

Our Windows 10 upgrade finally took shape and we could log into the system. After a good 11 hours it was about time. The system started to download updates for a change, so we left it for the night.

We had some minor tasks left for the morning. My father-in-law prefers to use the system in his own language, so we changed the language to Hungarian.

In Microsoft terms the language of the system is called the display language. You can set it in Control panel under time & language / region and language.

The only confusion I found here was that after adding Hungarian with the plus sign, Windows informed me that it will fetch the language with Windows update.

I went to the windows update in control panel, but nothing happened. I found out after a while that I should stay on the region and language setting page and a progress bar will appear after a while showing the download and installation status.

Once this is done, you have to log of and log back in and your system will be displayed in your language of choice.

## +1. How to use java based pages in Windows 10?

My father-in-law uses an internet banking solution based on java applets. I know it's a bit outdated, but there are still many people using such services out there.

It turns out that the new Edge browser does not support plugins, and therefore it cannot not run java components.

You have two options:
1. you can use Internet Explorer 11, or
2. you can use Firefox

I spent a few minutes looking for IE 11 download on the internet, but could not find anything. From the google hints I saw that I was not the only one. Finally I found out the truth about IE 11 by accidentally clicking a jnlp (java network launch protocol) file.

**IE 11 comes with Windows 10. It is part of the bundle, so if you want to run it besides Edge, you should be looking for it on your on PC.**

I put the IE icon next to the Edge icon and pinned it to the system tray. These two look so ugly next to each other.

![Edge and Internet Explorer logos in system tray]({{ site.url }}/assets/images/in-content/edge-ie-icons.png) 

[Image taken from here.](https://www.google.hu/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjLw9-KxtTKAhVHaQ8KHdRJAHgQjRwIBw&url=http%3A%2F%2Fwww.tenforums.com%2Fbrowsers-email%2F28477-desktop-shortcut-google-2.html&psig=AFQjCNGk8B_NNH_LjkPz-uVjqvYZy0wa3Q&ust=1454346749325912)

**So I installed Firefox.**

## Some nice words to Microsoft

I tried to describe the issues I met with facts and only a few emotional statements. Windows 10 looks cool and I enjoyed configuring it after it was up and running.

**I really appreciate what you're doing for the developer community and I totally love my XBox.**

I have written this post using [Microsoft Visual Studio Code](https://code.visualstudio.com/) running on Arch Linux in a VMWare Virtual Machine on my iMac.

I dumped my $70 sublime license for Code. Code is a fantastic product and I really love the way you can do markdown editing with an immediate preview.

I use it for programming tasks in my own venture and it does a fantastic job for node, Javascript, PHP, react and a lot of other stuff.

![Arch Linux with Visual Studio Code]({{ site.url }}/assets/images/in-content/window-10-install-post.png)

