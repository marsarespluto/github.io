GS.dataCache['2F2EF76A29CD244C777816787551DE0A054C'] = {
    "uid": "2F2EF76A29CD244C777816787551DE0A054C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "tobibedroom",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "2F2EF76A29CD244C777816787551DE0A054C",
        "isFolder": false,
        "parentId": "ACEFAA572822D144FE58A5C6C1ADFF4CFD34",
        "data": {
            "name": "tobibedroom",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.ChangeBackground",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "graphic": {
                            "name": "tobias room",
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
                        "waitForCompletion": 0,
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
                    "uid": "C29201C42E7B644DC149ACD389D065AC555B",
                    "indent": 0
                },
                {
                    "id": "vn.CharacterJoinScene",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "predefinedPositionId": 5,
                        "expressionId": "569486524904E14F564B9C62B31E5145175F",
                        "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
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
                    "uid": "FCD2410450A6314FDB093B342D2E851C1E88",
                    "indent": 0
                },
                {
                    "id": "gs.PlayMusic",
                    "params": {
                        "layer": 0,
                        "music": {
                            "name": "gamer_time",
                            "volume": "50",
                            "playbackRate": 100
                        },
                        "fadeInDuration": 60,
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
                            "music.playbackRate": 1,
                            "fadeInDuration": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "2FC1CCC58C3C3245A6885512FB22192CA4A9",
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
                    "uid": "60FF280A2C5F8241DD8A44417C617FD5C93F",
                    "indent": 0
                }
            ],
            "index": "2F2EF76A29CD244C777816787551DE0A054C",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}