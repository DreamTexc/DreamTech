#include "tinyxml2.h"
#include <iostream>

using namespace tinyxml2;

void parseXML() {
    XMLDocument doc;
    if (doc.LoadFile("data/artisticDevelopment.xml") == XML_SUCCESS) {  // Update path if necessary
        XMLElement* root = doc.RootElement();
        XMLElement* protocol = root->FirstChildElement("protocol");
        const char* name = protocol->FirstChildElement("name")->GetText();
        const char* description = protocol->FirstChildElement("description")->GetText();

        std::cout << "Protocol Name: " << name << std::endl;
        std::cout << "Description: " << description << std::endl;

        XMLElement* parameters = protocol->FirstChildElement("parameters");
        for (XMLElement* param = parameters->FirstChildElement("parameter"); param != nullptr; param = param->NextSiblingElement("parameter")) {
            const char* paramName = param->FirstChildElement("name")->GetText();
            const char* paramValue = param->FirstChildElement("value")->GetText();
            std::cout << paramName << ": " << paramValue << std::endl;
        }
    } else {
        std::cerr << "Failed to load XML file." << std::endl;
    }
}

int main() {
    parseXML();
    return 0;
}
