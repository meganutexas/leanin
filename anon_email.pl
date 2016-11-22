#!/usr/bin/perl
 
$to = 'megan.avery720@gmail.com';
$from = 'anon_feedback@utcsleanin.com';
$subject = 'Anon Feedback';
$message = 'Will be changed by website form information';
 
open(MAIL, "|/usr/sbin/sendmail -t");
 
# Email Header
print MAIL "To: $to\n";
print MAIL "From: $from\n";
print MAIL "Subject: $subject\n\n";
# Email Body
print MAIL $message;

close(MAIL);
print "Email Sent Successfully\n";
