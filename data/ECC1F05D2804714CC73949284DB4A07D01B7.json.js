GS.dataCache['ECC1F05D2804714CC73949284DB4A07D01B7'] = {
    "uid": "ECC1F05D2804714CC73949284DB4A07D01B7",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Envy's Poem",
        "parentId": "59EDE4B696E2E94D838AEBC79C732F2B0878",
        "localizableStrings": {
            "B882D526405E8642AE48F5795C24A924749F": {
                "t": "So, I have a little folding bed here if you'd like. You can also sleep on mine, I'm not very big and the bed is a double, so you'll have your personal space.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "6C795C1229FC944F463BFA01047843C49351"
                }
            },
            "22B673FE04EDC34CD428A7E012FC26F1847D": {
                "t": "(Sleep on the folding bed.)",
                "d": {
                    "eid": "F3A8D0092D8686418A787F63AD6E38C2DA01"
                }
            },
            "DD17D1C4643718487B3B9F54DDD92EA14008": {
                "t": "(Sleep in their bed.)",
                "d": {
                    "eid": "54B914E30C90F249506A9E725FF2C2BBF077"
                }
            },
            "528C397D88588741C2585DD4CB60D53EE3F3": {
                "t": "(Ends here. Update soon.)",
                "d": {
                    "cid": 0,
                    "eid": "C757A4A77D33E2485969344296CB8ED014A5"
                }
            }
        },
        "chapterUid": "33CA8B7A0CD3B540DA7A46943C31E3392A9E",
        "commands": [
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C2F1C9DA6C82F84D6F487784DD9338BD0E42",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "54655DD07123C24E98897AF3F411418EB058",
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
                        "lcId": "B882D526405E8642AE48F5795C24A924749F",
                        "defaultText": "So, I have a little folding bed here if you'd like. You can also sleep on mine, I'm not very big and the bed is a double, so you'll have your personal space."
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
                "uid": "6C795C1229FC944F463BFA01047843C49351",
                "indent": 0,
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
                        "label": "envyfoldingbed",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "22B673FE04EDC34CD428A7E012FC26F1847D",
                        "defaultText": "(Sleep on the folding bed.)"
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
                "uid": "F3A8D0092D8686418A787F63AD6E38C2DA01",
                "indent": 0
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
                        "label": "envybedtogether",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "DD17D1C4643718487B3B9F54DDD92EA14008",
                        "defaultText": "(Sleep in their bed.)"
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
                "uid": "54B914E30C90F249506A9E725FF2C2BBF077",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "30AB05DE72D23749D3293AD374979FEB3816",
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
                        "lcId": "528C397D88588741C2585DD4CB60D53EE3F3",
                        "defaultText": "(Ends here. Update soon.)"
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
                "uid": "C757A4A77D33E2485969344296CB8ED014A5",
                "indent": 0,
                "expanded": true
            }
        ],
        "livePreviewDisabled": false,
        "order": 0,
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
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
        "o",
        "chapterUid",
        "order"
    ]
}