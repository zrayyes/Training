postOffice := Object clone
postOffice packageSender := method(call sender)
postOffice messageTarget := method(call target)

mailer := Object clone
mailer from := method(postOffice packageSender)
mailer to := method(postOffice messageTarget)

mailer from println //from = method(...); The message came from the object with the "from" method
mailer to println //messageTarget = method(...); packageSender = method(...); The message is targeting the postOffice object

postOffice messageArgs := method(call message arguments)
postOffice messageName := method(call message name)

postOffice messageArgs(1,"some args", 3) println
postOffice messageName println

unless := method(
    (call sender doMessage(call message argAt(0))) ifFalse(
        call sender doMessage(call message argAt(1))) ifTrue(
            call sender doMessage(call message argAt(2)))
)

unless(true, ("It is false" println), ("It is true" println))