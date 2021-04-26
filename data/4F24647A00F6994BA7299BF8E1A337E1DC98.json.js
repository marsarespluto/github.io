GS.dataCache['4F24647A00F6994BA7299BF8E1A337E1DC98'] = {
    "uid": "4F24647A00F6994BA7299BF8E1A337E1DC98",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "The Ship of Theseus?",
        "type": "vn.scene",
        "parentId": "33CA8B7A0CD3B540DA7A46943C31E3392A9E",
        "chapterUid": "33CA8B7A0CD3B540DA7A46943C31E3392A9E",
        "order": 0,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "boat interior",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4DC918799303494B706B9F59FC28C34BF94A",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "music": {
                        "name": "happy mood",
                        "volume": "50",
                        "playbackRate": "100"
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "fieldFlags": {
                        "music.volume": 0,
                        "music.playbackRate": 0,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "DC2D33B17A83E140488BD014005802A08C13",
                "indent": 0
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": 0,
                    "parameters": {
                        "values": [
                            {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            }
                        ]
                    }
                },
                "uid": "E9F6182D788A15481738314224F427DE30E3",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "FB158491170EF7410699E9D093EDC327980B",
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
                        "lcId": "F2A9DC6387630243D21B3D3166275914F0B8",
                        "defaultText": "The interior of the ship is comfortable, warm and cozy. The sun is setting outside."
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
                "uid": "59AEA44F38B8374C7B29B386B1DE3F43C4FF",
                "indent": 0,
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
                        "lcId": "A3BB6BD18982F14ED24B0C55F207A7935162",
                        "defaultText": "Through the doorway are four rooms. One for you. You think about sleeping."
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
                "uid": "7090E4B446853649897B5C63A766A092B7CA",
                "indent": 0,
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
                        "lcId": "2CFC5B9D2723A74F1C3BBE28DA65E3D10B5E",
                        "defaultText": "The dead don't sleep. Perhaps it is because you don't remember what it's like, but you don't feel the need to sleep at all."
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
                "uid": "4ABF4617262BC64FC899559488A0753319C1",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "CD816D677437B8444E3B0476FDF985DCC079",
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
                        "lcId": "02B35A32177D734D6B8AB68148A94909189F",
                        "defaultText": "Before you can say anything, Annie disappears through the doorway and around a corner, probably in her room."
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
                "uid": "31D5FF609A3C034570880C54C7697AC6D1B8",
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
                        "label": "annieroom1",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "3D31A35786AEA543F1499EB66C87396340F5",
                        "defaultText": "(Go check on Annie.)"
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
                "uid": "CAAD369427E44345623853D2296E27E5439E",
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
                        "label": "nottoday",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "A26750CC3273614A3C79089035476DED46BD",
                        "defaultText": "(Stay with Envy and Tobias. Maybe she needs some time alone?)"
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
                "uid": "453732D01648D649E7099A1553C2D6B6F66F",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "A340A8C354AB6445399B3422716599550C35",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "annieroom1"
                },
                "uid": "AC419CDC200699454C79CF433903A409FAE0",
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
                        "lcId": "9ABEB8882096B44DCE4A7BE0C178BD641149",
                        "defaultText": "Sorry, I'm going to go check on her. Make yourself comfortable."
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
                "uid": "6A42DE095427664EA58AB49451E27DC71A00",
                "indent": 0,
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
                        "lcId": "6839A4EE6E358044C86BF6A64D78710EFBE4",
                        "defaultText": "They both nod understandingly."
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
                "uid": "9D96D1E08965A1466D3BCC7323746CB03338",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0,
                    "fieldFlags": {
                        "fadeOutDuration": 1
                    }
                },
                "uid": "876DB1F29A610148D82A77C69D18EC5A51BE",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "1414C2F80612C54F580B8768617ABC5F4546",
                        "name": "Annie's Room: Night 1"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "8E60B6D746FDF1420F395683F771A4BD9F6F",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "nottoday"
                },
                "uid": "8191268D9FB0E44F6D1B02C69DC263AE3240",
                "indent": 0
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
                        "lcId": "D4ADF2BA6F186845667A64F350BF4E4F2933",
                        "defaultText": "Is she going to be alright? "
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
                "uid": "2C49611A2F18B64FE26B3FA446555F3854A0",
                "indent": 0,
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
                        "lcId": "835E4F653EC2654B7A391E53B62D5ECB825E",
                        "defaultText": "I think she might just need some space."
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
                "uid": "46E10D495585B842184A12A0DF1B7CB959C9",
                "indent": 0,
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
                        "lcId": "0C79538E7C3D5447AF580B94F0A118940AEA",
                        "defaultText": "If you think so, {N:0001}."
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
                "uid": "BE1FA52378D05647815B7E86B031AA204E5D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "569486524904E14F564B9C62B31E5145175F",
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
                        "lcId": "8C54976537E16143318BA9A392AABE6E4CD5",
                        "defaultText": "And you are...?"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8A100F736591F84D4A4884D14DA19A9C6AC7",
                "indent": 0,
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
                        "lcId": "12E967A01A1AB44CC089ADC2AE4AA55EA75F",
                        "defaultText": "My name is Envy. It's nice to meet you. What's your name?"
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
                "uid": "3010A5FD31DE214F8B7ADB516C6210A0E46F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "A43334F28901094B6A5B10F1CB137F90CC68",
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
                        "lcId": "6921E9EB64D794439338B8663AF0DF696045",
                        "defaultText": "Haha, Envy. Is that why you're green?"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "31D9078465D406475329C5A9D20634A7A60B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "9F3859063C2F9540008B0E0973C34F3CDB1D",
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
                        "lcId": "5DCE5F6A3E8061472728DBD20C20469ECC16",
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
                "uid": "4C106B1C5696A7411048396043CEAAC9478C",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "2DAB068B559E824AAC589BF81A92CA77D0CD",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "569486524904E14F564B9C62B31E5145175F",
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
                        "lcId": "0CAB75FF88ACD744752A7B413D1154EEA930",
                        "defaultText": "No wait-"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CE34A5BB8A54A540C188F745DEFC4CAA7623",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": "6CC33B3461E4604ED35A8655F16E2A3FF021",
                    "characterId": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "6DFC8A0D6D76D44C7F68A286EB32128486BE",
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
                        "lcId": "E656F2B09232B140D8496DF785F6096AEC03",
                        "defaultText": "You're lucky you're already dead."
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
                "uid": "11000CD357F6764B8E284DF3C94C95A7E58E",
                "indent": 0,
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
                        "lcId": "5D5E3F12108540490A3B09E79C7169AE98AF",
                        "defaultText": "Hey, it wasn't that bad, was it? {N:0001}?"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "5840C96C6B11404C045871663438A009DC61",
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
                        "label": "jokebad",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "5457F43C6821774B9D194286F6B4FBC6869E",
                        "defaultText": "\"That was awful.\""
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
                "uid": "7BA03BA817FFD04A4D99AC5911249A22BB0A",
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
                        "label": "jokegood",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "0D7D911D221BC14EC538E1F2535114CE5984",
                        "defaultText": "\"No, it was good!\""
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
                "uid": "C741234C2EECB64FC24B1440C1BC3828775E",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "190A32C639F7424A371888C7B894C3810C3B",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jokebad"
                },
                "uid": "4FBEE99B3EB8A6452B2BB521DA0F01AA33E0",
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
                        "lcId": "1B8E45986AD4754C8B5BC0137452AF09458D",
                        "defaultText": "Neither of you understand my comedic genius."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A549C68C0450024E20594DE74AABEBE48405",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "afterjoke"
                },
                "uid": "D33EE14A2D1B0946F7794BC6ED54124F7DD9",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jokegood"
                },
                "uid": "454D8051255A8242FA8A32E6E39B4089D83C",
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
                        "lcId": "AFDE38F3414C9048D87890F7B884DA0C0755",
                        "defaultText": "See {N:0001} gets me."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CFC93974857CB648CC19E4A4C1864A432822",
                "indent": 0,
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
                        "lcId": "28E67CC86FF7E3464F3841474E835D60AC03",
                        "defaultText": "You are both horrible and you both disgust me deeply."
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
                "uid": "C68281273839B54CE8387F02F4299E082C72",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "afterjoke"
                },
                "uid": "708695EF2A71204D023B50A71EF933B48DD0",
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
                        "lcId": "900E0DE322ECC14C71496A15CEC92194554A",
                        "defaultText": "I wish I could revoke your rights to speak. How dare you."
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
                "uid": "8DDCB3C94A75694CB72A4D01DD3A294348F4",
                "indent": 0,
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
                        "lcId": "AC10E3B25EF27740BA8B7E00D367F38D0AA4",
                        "defaultText": "Even so, you can see a smile tugging at the corners of their lips."
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
                "uid": "5B2987D29C44E84A92885B6862E5537ACC68",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "A43334F28901094B6A5B10F1CB137F90CC68",
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
                        "lcId": "1D4BB8FE491E2543407901730BBC3CC7A15D",
                        "defaultText": "You're lying! You're literally smiling right now!"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "037672D884AAB740208BE90526C494CFC0EA",
                "indent": 0,
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
                        "lcId": "29666AB32E9DA8418979BD78C41A9BE1537A",
                        "defaultText": "You're a liar AND a bad comedian!"
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
                "uid": "AFC2C2F63E38F4418C080BE4B4F6A15D9582",
                "indent": 0,
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
                        "lcId": "69FC44176A4198467139E5675DA908415EBA",
                        "defaultText": "Before you know it, carried by the conversation, you lose yourself in Envy's attempts to cover up their amusement and Tobias' dogged will to make them laugh."
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
                "uid": "FAFE51AC32818749697B1E14743424C71A5C",
                "indent": 0,
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
                        "lcId": "748EF16C304FB843DD98B974AB099F4421FA",
                        "defaultText": "There's a small knock at the door."
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
                "uid": "EF7BD138044AE14B0B892EC12EEF452C1CBF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4BCA371970676647D03AF501763B4FF8E0C5",
                        "name": "The Gang's All Here"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2188609C8B5AF744330B8A598D9A60332EDB",
                "indent": 0
            }
        ],
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
        "localizableStrings": {
            "F2A9DC6387630243D21B3D3166275914F0B8": {
                "t": "The interior of the ship is comfortable, warm and cozy. The sun is setting outside.",
                "d": {
                    "cid": 0,
                    "eid": "59AEA44F38B8374C7B29B386B1DE3F43C4FF"
                }
            },
            "A3BB6BD18982F14ED24B0C55F207A7935162": {
                "t": "Through the doorway are four rooms. One for you. You think about sleeping.",
                "d": {
                    "cid": 0,
                    "eid": "7090E4B446853649897B5C63A766A092B7CA"
                }
            },
            "2CFC5B9D2723A74F1C3BBE28DA65E3D10B5E": {
                "t": "The dead don't sleep. Perhaps it is because you don't remember what it's like, but you don't feel the need to sleep at all.",
                "d": {
                    "cid": 0,
                    "eid": "4ABF4617262BC64FC899559488A0753319C1"
                }
            },
            "02B35A32177D734D6B8AB68148A94909189F": {
                "t": "Before you can say anything, Annie disappears through the doorway and around a corner, probably in her room.",
                "d": {
                    "cid": 0,
                    "eid": "31D5FF609A3C034570880C54C7697AC6D1B8"
                }
            },
            "3D31A35786AEA543F1499EB66C87396340F5": {
                "t": "(Go check on Annie.)",
                "d": {
                    "eid": "CAAD369427E44345623853D2296E27E5439E"
                }
            },
            "A26750CC3273614A3C79089035476DED46BD": {
                "t": "(Stay with Envy and Tobias. Maybe she needs some time alone?)",
                "d": {
                    "eid": "453732D01648D649E7099A1553C2D6B6F66F"
                }
            },
            "9ABEB8882096B44DCE4A7BE0C178BD641149": {
                "t": "Sorry, I'm going to go check on her. Make yourself comfortable.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "6A42DE095427664EA58AB49451E27DC71A00"
                }
            },
            "6839A4EE6E358044C86BF6A64D78710EFBE4": {
                "t": "They both nod understandingly.",
                "d": {
                    "cid": 0,
                    "eid": "9D96D1E08965A1466D3BCC7323746CB03338"
                }
            },
            "D4ADF2BA6F186845667A64F350BF4E4F2933": {
                "t": "Is she going to be alright? ",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "2C49611A2F18B64FE26B3FA446555F3854A0"
                }
            },
            "835E4F653EC2654B7A391E53B62D5ECB825E": {
                "t": "I think she might just need some space.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "46E10D495585B842184A12A0DF1B7CB959C9"
                }
            },
            "0C79538E7C3D5447AF580B94F0A118940AEA": {
                "t": "If you think so, {N:0001}.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "BE1FA52378D05647815B7E86B031AA204E5D"
                }
            },
            "8C54976537E16143318BA9A392AABE6E4CD5": {
                "t": "And you are...?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "8A100F736591F84D4A4884D14DA19A9C6AC7"
                }
            },
            "12E967A01A1AB44CC089ADC2AE4AA55EA75F": {
                "t": "My name is Envy. It's nice to meet you. What's your name?",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "3010A5FD31DE214F8B7ADB516C6210A0E46F"
                }
            },
            "6921E9EB64D794439338B8663AF0DF696045": {
                "t": "Haha, Envy. Is that why you're green?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "31D9078465D406475329C5A9D20634A7A60B"
                }
            },
            "5DCE5F6A3E8061472728DBD20C20469ECC16": {
                "t": "...",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "4C106B1C5696A7411048396043CEAAC9478C"
                }
            },
            "0CAB75FF88ACD744752A7B413D1154EEA930": {
                "t": "No wait-",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "CE34A5BB8A54A540C188F745DEFC4CAA7623"
                }
            },
            "E656F2B09232B140D8496DF785F6096AEC03": {
                "t": "You're lucky you're already dead.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "11000CD357F6764B8E284DF3C94C95A7E58E"
                }
            },
            "5D5E3F12108540490A3B09E79C7169AE98AF": {
                "t": "Hey, it wasn't that bad, was it? {N:0001}?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "5840C96C6B11404C045871663438A009DC61"
                }
            },
            "5457F43C6821774B9D194286F6B4FBC6869E": {
                "t": "\"That was awful.\"",
                "d": {
                    "eid": "7BA03BA817FFD04A4D99AC5911249A22BB0A"
                }
            },
            "0D7D911D221BC14EC538E1F2535114CE5984": {
                "t": "\"No, it was good!\"",
                "d": {
                    "eid": "C741234C2EECB64FC24B1440C1BC3828775E"
                }
            },
            "900E0DE322ECC14C71496A15CEC92194554A": {
                "t": "I wish I could revoke your rights to speak. How dare you.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "8DDCB3C94A75694CB72A4D01DD3A294348F4"
                }
            },
            "1B8E45986AD4754C8B5BC0137452AF09458D": {
                "t": "Neither of you understand my comedic genius.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "A549C68C0450024E20594DE74AABEBE48405"
                }
            },
            "AC10E3B25EF27740BA8B7E00D367F38D0AA4": {
                "t": "Even so, you can see a smile tugging at the corners of their lips.",
                "d": {
                    "cid": 0,
                    "eid": "5B2987D29C44E84A92885B6862E5537ACC68"
                }
            },
            "1D4BB8FE491E2543407901730BBC3CC7A15D": {
                "t": "You're lying! You're literally smiling right now!",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "037672D884AAB740208BE90526C494CFC0EA"
                }
            },
            "29666AB32E9DA8418979BD78C41A9BE1537A": {
                "t": "You're a liar AND a bad comedian!",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "AFC2C2F63E38F4418C080BE4B4F6A15D9582"
                }
            },
            "69FC44176A4198467139E5675DA908415EBA": {
                "t": "Before you know it, carried by the conversation, you lose yourself in Envy's attempts to cover up their amusement and Tobias' dogged will to make them laugh.",
                "d": {
                    "cid": 0,
                    "eid": "FAFE51AC32818749697B1E14743424C71A5C"
                }
            },
            "AFDE38F3414C9048D87890F7B884DA0C0755": {
                "t": "See {N:0001} gets me.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "CFC93974857CB648CC19E4A4C1864A432822"
                }
            },
            "28E67CC86FF7E3464F3841474E835D60AC03": {
                "t": "You are both horrible and you both disgust me deeply.",
                "d": {
                    "cid": "50AD6E874D53914E978815C0A9CE8B96B773",
                    "eid": "C68281273839B54CE8387F02F4299E082C72"
                }
            },
            "748EF16C304FB843DD98B974AB099F4421FA": {
                "t": "There's a small knock at the door.",
                "d": {
                    "cid": 0,
                    "eid": "EF7BD138044AE14B0B892EC12EEF452C1CBF"
                }
            }
        },
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