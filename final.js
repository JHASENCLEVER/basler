<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>

    var current_url = window.location.href;

    document.addEventListener("DOMContentLoaded", () => {
        console.log('enter here');
        if(current_url=='https://mcstaging.baslerweb.com/apac_en/catalog/category/view/s/all-accessories/id/72/'){
            setTimeout(() => {  
                /*https://baslerweb--webchat--c.visualforce.com/apex/WebChatTest*/
                document.getElementsByClassName('embeddedServiceIcon').item(0).style.animationName = 'blinksBriefly';
                document.getElementsByClassName('embeddedServiceIcon').item(0).style.animationDuration= '2.5s';
            }, 2000);
        }
    });    
    
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
        embedded_svc.settings.loadingText = "Loading";
        embedded_svc.settings.disabledMinimizedText = '';

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.settings.autoOpenPostChat = true;

        embedded_svc.settings.extraPrechatFormDetails = [
        {"label":"First Name", "transcriptFields":["FirstName__c"]},
        {"label":"Last Name", "transcriptFields":["LastName__c"]},
        {"label":"Your Email", "transcriptFields":["EMail__c"]},
        {"label":"Your Company", "transcriptFields":["Company__c"]}
        ];


        var show = false;
        embedded_svc.addEventHandler("afterMaximize", function(data) {
            console.log("afterMaximize event was fired.");
            console.log('show:'+show);
            if (!show) {
                show = true;
                var li2 = document.createElement("div");
                li2.style.backgroundColor  =  "white";
                li2.style.padding = "5px";
                li2.style.fontFamily = "DINWebPro-Regular, Helvetica, Arial, Meiryo, sans-serif";
                li2.style.fontSize = "13px";
                li2.style.color = "#00457c";

                var email = 'sales.usa@baslerweb.com';
                var emailLink = document.createElement("a");
                emailLink.style.fontFamily = "DINWebPro-Regular, Helvetica, Arial, Meiryo, sans-serif";
                emailLink.style.fontSize = "13px";
                emailLink.style.color = "#15487f";
                emailLink.setAttribute("href", "mailto:"+email);
                emailLink.appendChild(document.createTextNode(email));
 
                
                li2.appendChild(document.createTextNode("You can also reach us by phone (+1 610 280 0171) and via email ("));
                li2.appendChild(emailLink);
                li2.appendChild(document.createTextNode(")."));
                var sidebar = document.querySelector("div.formContent.embeddedServiceSidebarForm");
                
                sidebar.insertBefore(li2, sidebar.childNodes[0]);
            }
        }); 

        embedded_svc.addEventHandler("afterMinimize", function(data) {
            console.log("afterMinimize event was fired.");
            document.getElementsByClassName('embeddedServiceIcon').item(0).style.display = "block";
            document.getElementsByClassName('sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI').item(0).style.background = "transparent";
            document.getElementsByClassName('sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI').item(0).style.border = "none";
            document.getElementsByClassName('sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI').item(0).style.boxShadow = "none";
            document.getElementsByClassName('messageContent').item(0).style.display = "none";
        });

        embedded_svc.addEventHandler("afterDestroy", function(data) {
            console.log("afterDestroy event was fired.");
            document.getElementsByClassName('embeddedServiceIcon').item(0).style.display = "block";
            document.getElementsByClassName('messageContent').item(0).style.display = "none";
            show=false;
        });

        embedded_svc.init(
            'https://baslerweb--webchat.my.salesforce.com',
            'https://webchat-basler-communities.cs102.force.com/tests',
            gslbBaseURL,
            '00D1j000000EOpJ',
            'Queue_WebChat_Cases',
            {
                baseLiveAgentContentURL: 'https://c.la1-c1cs-fra.salesforceliveagent.com/content',
                deploymentId: '5721v000000HAON',
                buttonId: '5731j000000CbJd',
                baseLiveAgentURL: 'https://d.la1-c1cs-fra.salesforceliveagent.com/chat',
                eswLiveAgentDevName: 'Queue_WebChat_Cases',
                isOfflineSupportEnabled: false
            }
        );
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://baslerweb--webchat.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('https://service.force.com');
    }

    function checkAvailability() {
            const elementEnabled = document.getElementsByClassName('uiButton helpButtonEnabled');
            const elementDisabled = document.getElementsByClassName('uiButton helpButtonDisabled');
            if(elementEnabled && elementEnabled.length > 0) {
                document.getElementsByClassName('embeddedServiceHelpButton').item(0).style.display = "block";
            }
            if(elementDisabled && elementDisabled.length > 0) {
                document.getElementsByClassName('embeddedServiceHelpButton').item(0).style.display = "none";
            } 
            
        }
       
        window.setInterval(function () {
            checkAvailability();
        }, 100);

      
</script>
