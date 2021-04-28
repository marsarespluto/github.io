GS.dataCache['59EDE4B696E2E94D838AEBC79C732F2B0878'] = {
    "uid": "59EDE4B696E2E94D838AEBC79C732F2B0878",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Bedtime with Envy",
        "type": "vn.scene",
        "parentId": "3C25D2203330434CC04AD9F699443C903364",
        "chapterUid": "33CA8B7A0CD3B540DA7A46943C31E3392A9E",
        "order": 2,
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "commands": [
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C2F1C9DA6C82F84D6F487784DD9338BD0E42",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "70C0BBBF75BCA6474649E910161725E5AC41",
                "indent": 0
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "E5040E494B25F8480F68E5535CB78DABECAB",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "A1C8293B0E5EF2486C8A7AA17C6517AA1F0E",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8BD9F6EB432DE344D24A2BB3E3F9EBA10A1A",
                        "defaultText": "It's quite strange. When I walked into this room for the first time, I thought I'd woken up from some incredible dream..."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CC156B3158731249FA693045D873F3CBD3A1",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "326129B62013A748A18B3F0122137C18E02F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B839F55F7F48E84AF51ACE31A0E3EC7B7343",
                        "defaultText": "Then I looked out the window and saw the orange sun and the purple sea, and I realised it was real. It was all real, meeting Tobias and Annie, eating noodles, watching the waves at the beach touch me but leave no trace of water..."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E36DEF5064E0004FD4997B23137ADE9DC3B6",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CheckNumberVariable",
                "params": {
                    "targetVariable": {
                        "name": "envyromance",
                        "index": 5,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 3,
                    "value": 4,
                    "label": "",
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "001C96E928FB2347C748C9442887DA23E9D0",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": ""
                },
                "uid": "23F639A5135FE34B4C2963D70255A857A9C1",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "1EEFF68085FCB141946A02032567F3128429",
                        "defaultText": "...and meeting you."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1ED4BBAD8D943842395ABC36D3DF887AA162",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "E5040E494B25F8480F68E5535CB78DABECAB",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "AC582B1710A212466A2B4EA67EFAE32E3B1B",
                "indent": 1
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "envychatbedroomnight1"
                },
                "uid": "7B1AAB746B71E345912A68854DE89F5DD527",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "B091860C2AD8E44B877897736BF29F86713B",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "AD83254E2D1B304B063A90436CCBB97D2EA4",
                        "defaultText": "It's quite scary, to be honest."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "F75621598B1D9649C63A7301D6F93044111E",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "envychatbedroomnight1"
                },
                "uid": "31E3FAAE21E6D0446E8A3DA4EB8C4DE689BD",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "envychatbedroomnight1"
                },
                "uid": "089A24D40C3DD647E9596C95AD7C5DFCBD6A",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A5F4BF5C61DAE54C0D39F6C4C5009D996120",
                        "defaultText": "{N:0001}...does passing on scare you?"
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3A1413C11FD9E64822284CF914E4EB0390CA",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "814D98CF0779F74FF11B2DB65418FEF95621",
                        "defaultText": "It scares me...because I think to myself, \"Ah, the stories that will die with me!\" All the ideas I never wrote, or painted, or sang and recorded. There's so much I regret not starting or not finishing."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7EA100C322EF174B3959E3F3658194DF9276",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "326129B62013A748A18B3F0122137C18E02F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "2AF53379291BC845F588D607BD79F8545520",
                        "defaultText": "Perhaps it's selfish of me to think that way."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4312414C82BA334A0518ECB74317283F53A6",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "2CA9151B6EA3E447926AF4352E1FD40C88DC",
                        "defaultText": "I like to think of it as...a form of love, no? I am a hopeless romantic at heart, but I think the arts, storytelling, perhaps is just \"I love you,\" without those words specifically. "
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EBFF53819B58284CF98B1925E63A5C5C800C",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "545885CA9BD06542CA1B20870B356A87C1E8",
                        "defaultText": "Writing something, painting something, singing something for someone you love...You don't have to be good. "
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "06DF063352C1364AD84976D5C62FC79F64F8",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "9B16C20D8366334D8E3ADBD4D7CE159ECE39",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5EC45ECE9AAE9844CA3A9797F6E4ACAAA7AF",
                        "defaultText": "It sounds juvenile, but I truly believe it's the thought that counts. "
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "38098D2B412A504CEB3AC0A3E9579190B536",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "4DC363426529334BDE4BB6E5907AADF17FC2",
                        "defaultText": "Have you...ever loved someone, {N:0001}?"
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4078992383ADC249557876E906CC2F3E0922",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "envysad1",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "404A878C2834734C841A5E5147857CDCA1B9",
                        "defaultText": "I don't remember."
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "8D4EAFDC8CB72444AA8A73D62FC3F3A3DB1F",
                "indent": 1
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "envyflirt1",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "19CCC32C612EF04C6C4AC1A37B9725402D45",
                        "defaultText": "Why, are you hoping I'll say \"you\"?"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "4A1FDDF213983846331A97536ED7307688B9",
                "indent": 1
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "536DA5365F41714B9D7A733064171838AC4D",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "envysad1"
                },
                "uid": "369F105077FF094A448B2F09F812FD6D6678",
                "indent": 1
            },
            {
                "id": "gs.CheckNumberVariable",
                "params": {
                    "targetVariable": {
                        "name": "envycandyremember",
                        "index": 8,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "operation": 0,
                    "value": 1,
                    "label": "dontremember",
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6266F47B746705430A0BF5D4C0CD00C9A847",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "B84431BC7FBC3549D039E5665A07BFB9D655",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "20B26B6C5F321248258A29D56BC83478B1BE",
                        "defaultText": "What, did they wipe your memory or something?"
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A6981E264BB82849C83AB2B0165F17C4C692",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "1CBE834E4C2D554BC22A09C2982274D00317",
                        "defaultText": "Their joking smile fades as they see your lack of joviality."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "20D3F79F3F72444204294B78D28C3749812A",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "ripyou"
                },
                "uid": "0EB554CD19CDB34D43294B36B052D7F18409",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "dontremember"
                },
                "uid": "3D5BE73A3819324B464A1DC2C98A42EA0028",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A95B872027AD674BA239A9E58BB17C082256",
                        "defaultText": "You see the same look of concern flit over their face."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B52B3C7B894FC146097B1AA7260D653B505A",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "246F75ED2C86A947010A3271272829BAEDBF",
                        "defaultText": "You said something similar before. "
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8809C44B3F9384470F2ABDE6FF49C8D3C9BD",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "AD8DE58486F5044F022B6D257221E5C9222B",
                        "defaultText": "You nod."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E172FD7C9B7BB546791865A7279A2055EBAD",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "ripyou"
                },
                "uid": "E7F03BD0337CB2427189731873786BAD87BC",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "4E4A6450264ED34E53982AA1EE3F8568AC26",
                        "defaultText": "Is all you remember your name, {N:0001}...?"
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B9DFFDC88013964F24589303B4550B27FBCC",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "956EC79D423E064D736A7344B37D02BC3803",
                        "defaultText": "..."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "88D845399FB65247351808D341DF546D403E",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B3C327D161945245574A6143DF82355C3409",
                        "defaultText": "They step forward, before grasping you in a firm hug."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "87678AAC4E6AE54C309899741F35ADCBBC5B",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "45DF4099291EC34F3E9A88E7E3F320C9434A",
                        "defaultText": "Oh, oh dear. I'm so sorry, I had no idea."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "855A8E9E8EAE33434C1A7E206909448C71AA",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F0A0863C56F045432B285A612DAEB92563DF",
                        "defaultText": "You stay like that for a while, their embrace warm and comforting. "
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E9F13D3C12C7C742C96BEEE892268624171C",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "sleepytime"
                },
                "uid": "F5560B4F5229C5479B79D867489DA26AA263",
                "indent": 1
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "envyflirt1"
                },
                "uid": "FD5331285841D64A6D49D8D09935E8D4923B",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "9B16C20D8366334D8E3ADBD4D7CE159ECE39",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "D70BD5E3628494495868292343DC4914BF60",
                        "defaultText": "Oh, you flatter me too much, {N:0001}. I'm really not that special."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EB3F0B0626622844C43B435569B8E524B382",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "CDA7ECE9872DB34DA918B0D66C67470F67E0",
                        "defaultText": "Though, I don't mind if you...keep saying such sweet things."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "60581344409F5743E97B9735EA84B27C1032",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "sleepytime"
                },
                "uid": "C6826FBA40A1134F70393E22EEAF81587E7E",
                "indent": 1
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "326129B62013A748A18B3F0122137C18E02F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5276C3E36F73B74652485D31FAAC1C3D19AA",
                        "defaultText": "I'm really thankful that you're here, {N:0001}. To be honest, I'm a little afraid of being on ships. It sounds silly, I mean, I'm already dead, what is there to lose? I think I just feel, um, unsteady."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "2B1499E6846B334CDC782197C9B1DD0F30C8",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "BF7CB12110894142C299D341A545C910AA86",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "31E07E8C5796E249DF9AF885DC809DEF2BD4",
                        "defaultText": "Well, um, I suppose it's time to go to bed. I can read you some of my poetry books before bed, if you'd like. "
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "62CCA782508CC349B39A85D27A61B2A1809A",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9B1979F33B5904424C6A26D83908FEAF08C0",
                        "defaultText": "Of course."
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EA4CD8A51AE4C84C4C8AEF2545019890B369",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9FF165A345A5134B041B82D2A0CD2111FE5E",
                        "defaultText": "Oh! Oh, okay! Well, come up to bed with me, please. I'd prefer if you slept close by."
                    },
                    "position": 0,
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D440A8DC77C61542B7797A5788E6B5C8E089",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6B0DB424256BC04A976BB258FB0BA068DC3F",
                        "defaultText": "You ascend the sturdy ladder up to the loft."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6219220523FE544B1C4A3193284794F8B3B9",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": null,
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "259043F240F19342A49A9BC0F1C82804CB39",
                "indent": 1
            }
        ],
        "localizableStrings": {
            "8BD9F6EB432DE344D24A2BB3E3F9EBA10A1A": {
                "t": "It's quite strange. When I walked into this room for the first time, I thought I'd woken up from some incredible dream...",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "CC156B3158731249FA693045D873F3CBD3A1"
                }
            },
            "B839F55F7F48E84AF51ACE31A0E3EC7B7343": {
                "t": "Then I looked out the window and saw the orange sun and the purple sea, and I realised it was real. It was all real, meeting Tobias and Annie, eating noodles, watching the waves at the beach touch me but leave no trace of water...",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "E36DEF5064E0004FD4997B23137ADE9DC3B6"
                }
            },
            "AD83254E2D1B304B063A90436CCBB97D2EA4": {
                "t": "It's quite scary, to be honest.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "F75621598B1D9649C63A7301D6F93044111E"
                }
            },
            "1EEFF68085FCB141946A02032567F3128429": {
                "t": "...and meeting you.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "1ED4BBAD8D943842395ABC36D3DF887AA162"
                }
            },
            "A5F4BF5C61DAE54C0D39F6C4C5009D996120": {
                "t": "{N:0001}...does passing on scare you?",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "3A1413C11FD9E64822284CF914E4EB0390CA"
                }
            },
            "814D98CF0779F74FF11B2DB65418FEF95621": {
                "t": "It scares me...because I think to myself, \"Ah, the stories that will die with me!\" All the ideas I never wrote, or painted, or sang and recorded. There's so much I regret not starting or not finishing.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "7EA100C322EF174B3959E3F3658194DF9276"
                }
            },
            "2AF53379291BC845F588D607BD79F8545520": {
                "t": "Perhaps it's selfish of me to think that way.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "4312414C82BA334A0518ECB74317283F53A6"
                }
            },
            "2CA9151B6EA3E447926AF4352E1FD40C88DC": {
                "t": "I like to think of it as...a form of love, no? I am a hopeless romantic at heart, but I think the arts, storytelling, perhaps is just \"I love you,\" without those words specifically. ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "EBFF53819B58284CF98B1925E63A5C5C800C"
                }
            },
            "545885CA9BD06542CA1B20870B356A87C1E8": {
                "t": "Writing something, painting something, singing something for someone you love...You don't have to be good. ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "06DF063352C1364AD84976D5C62FC79F64F8"
                }
            },
            "5EC45ECE9AAE9844CA3A9797F6E4ACAAA7AF": {
                "t": "It sounds juvenile, but I truly believe it's the thought that counts. ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "38098D2B412A504CEB3AC0A3E9579190B536"
                }
            },
            "4DC363426529334BDE4BB6E5907AADF17FC2": {
                "t": "Have you...ever loved someone, {N:0001}?",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "4078992383ADC249557876E906CC2F3E0922"
                }
            },
            "404A878C2834734C841A5E5147857CDCA1B9": {
                "t": "I don't remember.",
                "d": {
                    "eid": "8D4EAFDC8CB72444AA8A73D62FC3F3A3DB1F"
                }
            },
            "19CCC32C612EF04C6C4AC1A37B9725402D45": {
                "t": "Why, are you hoping I'll say \"you\"?",
                "d": {
                    "eid": "4A1FDDF213983846331A97536ED7307688B9"
                }
            },
            "A95B872027AD674BA239A9E58BB17C082256": {
                "t": "You see the same look of concern flit over their face.",
                "d": {
                    "cid": 0,
                    "eid": "B52B3C7B894FC146097B1AA7260D653B505A"
                }
            },
            "246F75ED2C86A947010A3271272829BAEDBF": {
                "t": "You said something similar before. ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "8809C44B3F9384470F2ABDE6FF49C8D3C9BD"
                }
            },
            "4E4A6450264ED34E53982AA1EE3F8568AC26": {
                "t": "Is all you remember your name, {N:0001}...?",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "B9DFFDC88013964F24589303B4550B27FBCC"
                }
            },
            "AD8DE58486F5044F022B6D257221E5C9222B": {
                "t": "You nod.",
                "d": {
                    "cid": 0,
                    "eid": "E172FD7C9B7BB546791865A7279A2055EBAD"
                }
            },
            "956EC79D423E064D736A7344B37D02BC3803": {
                "t": "...",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "88D845399FB65247351808D341DF546D403E"
                }
            },
            "B3C327D161945245574A6143DF82355C3409": {
                "t": "They step forward, before grasping you in a firm hug.",
                "d": {
                    "cid": 0,
                    "eid": "87678AAC4E6AE54C309899741F35ADCBBC5B"
                }
            },
            "20B26B6C5F321248258A29D56BC83478B1BE": {
                "t": "What, did they wipe your memory or something?",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "A6981E264BB82849C83AB2B0165F17C4C692"
                }
            },
            "1CBE834E4C2D554BC22A09C2982274D00317": {
                "t": "Their joking smile fades as they see your lack of joviality.",
                "d": {
                    "cid": 0,
                    "eid": "20D3F79F3F72444204294B78D28C3749812A"
                }
            },
            "45DF4099291EC34F3E9A88E7E3F320C9434A": {
                "t": "Oh, oh dear. I'm so sorry, I had no idea.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "855A8E9E8EAE33434C1A7E206909448C71AA"
                }
            },
            "F0A0863C56F045432B285A612DAEB92563DF": {
                "t": "You stay like that for a while, their embrace warm and comforting. ",
                "d": {
                    "cid": 0,
                    "eid": "E9F13D3C12C7C742C96BEEE892268624171C"
                }
            },
            "D70BD5E3628494495868292343DC4914BF60": {
                "t": "Oh, you flatter me too much, {N:0001}. I'm really not that special.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "EB3F0B0626622844C43B435569B8E524B382"
                }
            },
            "CDA7ECE9872DB34DA918B0D66C67470F67E0": {
                "t": "Though, I don't mind if you...keep saying such sweet things.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "60581344409F5743E97B9735EA84B27C1032"
                }
            },
            "5276C3E36F73B74652485D31FAAC1C3D19AA": {
                "t": "I'm really thankful that you're here, {N:0001}. To be honest, I'm a little afraid of being on ships. It sounds silly, I mean, I'm already dead, what is there to lose? I think I just feel, um, unsteady.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "2B1499E6846B334CDC782197C9B1DD0F30C8"
                }
            },
            "31E07E8C5796E249DF9AF885DC809DEF2BD4": {
                "t": "Well, um, I suppose it's time to go to bed. I can read you some of my poetry books before bed, if you'd like. ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "62CCA782508CC349B39A85D27A61B2A1809A"
                }
            },
            "9B1979F33B5904424C6A26D83908FEAF08C0": {
                "t": "Of course.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "EA4CD8A51AE4C84C4C8AEF2545019890B369"
                }
            },
            "9FF165A345A5134B041B82D2A0CD2111FE5E": {
                "t": "Oh! Oh, okay! Well, come up to bed with me, please. I'd prefer if you slept close by.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "D440A8DC77C61542B7797A5788E6B5C8E089"
                }
            },
            "6B0DB424256BC04A976BB258FB0BA068DC3F": {
                "t": "You ascend the sturdy ladder up to the loft.",
                "d": {
                    "cid": 0,
                    "eid": "6219220523FE544B1C4A3193284794F8B3B9"
                }
            }
        },
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}